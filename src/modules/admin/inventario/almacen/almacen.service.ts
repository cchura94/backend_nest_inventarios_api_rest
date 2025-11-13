import { Injectable, NotFoundException } from '@nestjs/common';
import { CreateAlmacenDto } from './dto/create-almacen.dto';
import { UpdateAlmacenDto } from './dto/update-almacen.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Almacen } from './entities/almacen.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AlmacenService {
  constructor(
    @InjectRepository(Almacen)
    private readonly almacenRepository: Repository<Almacen>
){}
  create(createAlmacenDto: CreateAlmacenDto) {
    // const alm = this.almacenRepository.create(createAlmacenDto);
    // return this.almacenRepository.save(alm)
  }

  findAll() {
    return this.almacenRepository.find();
  }

  async findOne(id: number) {
    const almacen = await this.almacenRepository.findOneBy({id})
    if(!almacen) throw new NotFoundException('El almacen no existe');
    return almacen;
  }

  update(id: number, updateAlmacenDto: UpdateAlmacenDto) {
    return `This action updates a #${id} almacen`;
  }

  remove(id: number) {
    return `This action removes a #${id} almacen`;
  }
}
