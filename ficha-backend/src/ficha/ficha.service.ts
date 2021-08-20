import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';
import { Model } from 'mongoose';
import { Ficha } from './ficha.model';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class FichaService {
  constructor(
    @InjectModel('Ficha') private readonly FichaModel: Model<Ficha>,
  ) {}

  async create(
    name: string,
    mid_n: string,
    last_n: string,
    titulo: number,
    years: string,
    ciudad: string,
    editorial: string,
  ) {
    const newFicha = new this.FichaModel({
      name,
      mid_n,
      last_n,
      titulo,
      years,
      ciudad,
      editorial,
    });
    const result = await newFicha.save();
    return result;
  }

  async findAll() {
    const fichas = await this.FichaModel.find().exec();
    return fichas.map((ficha) => ({
      id: ficha.id,
      name: ficha.name,
      mid_n: ficha.mid_n,
      last_n: ficha.last_n,
      titulo: ficha.titulo,
      years: ficha.years,
      ciudad: ficha.ciudad,
      editorial: ficha.editorial,
    }));
  }

  //Metodo que busca al ficha mediante el id ymuestra sus datos
  async findOne(id: string) {
    const ficha = await this.findFicha(id);
    return {
      id: ficha.id,
      name: ficha.name,
      mid_n: ficha.mid_n,
      last_n: ficha.last_n,
      titulo: ficha.titulo,
      years: ficha.years,
      ciudad: ficha.ciudad,
      editorial: ficha.editorial,
    };
  }
  //Metodo para la actualizacion de datos del ficha
  async update(
    id: string,
    name: string,
    mid_n: string,
    last_n: string,
    titulo: string,
    years: string,
    ciudad: string,
    editorial: string,
  ) {
    const ficha = await this.findFicha(id);
    if (name) ficha.name = name;
    if (mid_n) ficha.mid_n = mid_n;
    if (last_n) ficha.last_n = last_n;
    if (titulo) ficha.titulo = titulo;
    if (years) ficha.years = years;
    if (ciudad) ficha.ciudad = ciudad;
    if (editorial) ficha.editorial = editorial;
    return ficha.save();
  }

  //Metodo que elimina a los fichas
  async remove(id: string) {
    const result = await this.FichaModel.deleteOne({ _id: id }).exec();
    if (result.n === 0) {
      throw new NotFoundException('No se pudo encontrar la ficha a eliminar');
    }
  }
  //Metodo que busca las fichas mediante el id
  private async findFicha(id: string): Promise<Ficha> {
    let ficha: any;
    try {
      ficha = await this.FichaModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('No se encontró la ficha');
    }
    return ficha;
  }
}
