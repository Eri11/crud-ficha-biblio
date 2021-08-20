import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  Put,
} from '@nestjs/common';

import { FichaService } from './ficha.service';
import { CreateFichaDto } from './dto/create-ficha.dto';
import { UpdateFichaDto } from './dto/update-ficha.dto';

@Controller('ficha')
export class FichaController {
  constructor(private readonly fichaService: FichaService) {}

  @Post()
  create(
    @Body('name') name: string,
    @Body('mid_n') mid_n: string,
    @Body('last_n') last_n: string,
    @Body('titulo') titulo: number,
    @Body('years') years: string,
    @Body('ciudad') ciudad: string,
    @Body('editorial') editorial: string,
  ) {
    return this.fichaService.create(
      name,
      mid_n,
      last_n,
      titulo,
      years,
      ciudad,
      editorial,
    );
  }

  @Get()
  findAll() {
    return this.fichaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.fichaService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body('name') name: string,
    @Body('mid_n') mid_n: string,
    @Body('last_n') last_n: string,
    @Body('titulo') titulo: string,
    @Body('years') years: string,
    @Body('ciudad') ciudad: string,
    @Body('editorial') editorial: string,
  ) {
    return this.fichaService.update(
      id,
      name,
      mid_n,
      last_n,
      titulo,
      years,
      ciudad,
      editorial,
    );
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.fichaService.remove(id);
  }

  @Put(':id')
  updateA(@Param('id') id:string, @Body('id_a') id_a:string, @Body('e_a') e_a:string) {
    if(id_a==null){
      return this.fichaService.updateAcceso(id, e_a);
    }else{
      return this.fichaService.removeA(id, id_a);
    }
  }
}
