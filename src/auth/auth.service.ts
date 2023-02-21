import {
    BadRequestException,
    Injectable,
    NotFoundException,
    Req,
    Session,
  } from '@nestjs/common';
import { InjectRepository } from "@nestjs/typeorm";
import { UsersService } from 'src/users/users.service';
import { randomBytes, scrypt as _scrypt } from 'crypto';
import { promisify } from 'util';
import { CreateUserDto } from 'src/users/dto/create.user.dto';
import axios  from 'axios';
import { Code, Repository } from 'typeorm';
import { Users } from 'src/typeorm/entities/User.entity';
import { CodeDto } from 'src/users/dto/code.dto';

@Injectable()
export class AuthService {
  constructor(private readonly userService: UsersService, @InjectRepository(Users) private userRepository:Repository<Users>) {}
  
   async code() {
      const code = Math.floor(1000 + Math.random() * 9000)
      return code.toString();
  }

  async signup(dto: CreateUserDto) {
        //here is looking for if a user exists or not 
        //if exist then throw badrequestexeption with message number in use
        //if not exist then use sms api: and send sms to client
        //if correct sms then save user and give him access
        const user = await this.userRepository.findOne({
            where: {phoneNumber: dto.phoneNumber}
        })
        if (user) throw new BadRequestException('num in use')

      const code = Math.floor(1000 + Math.random() * 9000).toString();
      
      //   await axios.post('https://smspro.nikita.kg/api/message', `<?xml version="1.0" encoding="UTF-8"?>
      //   <message>
      //   <login>ttemirlan2</login>
      //   <pwd>1fwU6GTG</pwd>
      //   <id>${code}</id>
      //   <sender>SMSPRO.KG</sender>
      //   <text>${code}</text>
      //   <phones>
      //   <phone>996550223324</phone>
      //   </phones>
      //   </message>`).then((response) => {
      // }).catch(err => console.log(err))
      
      const create = await this.userRepository.create(dto)
      create.code = code;
      return await this.userRepository.save(create);      
  }
  async verify(codeDto: CodeDto) {
      // const code = await this.code();
      // const code = await this.code().then((result)=>{return result});
      // const code = await this.signup(createDto);
      // const data = await this.userRepository.findOne({where: {code: codeDto.code}})
      // if (codeDto.code === data.code) {
      //       return await this.userRepository.save(data.dto)
      // }
      // else throw new BadRequestException('Код не верный')
      const check = await this.userRepository.findOne({where: {code: codeDto.code}});
      if (!check) {
            // await this.userRepository.remove()
      }
  }
  async signin(userDto: CreateUserDto) {
        //here is looking for if a user exists or not 
        //if not exist then throw badrequestexeption with message not signed up
        //if exist then use sms api: and send sms to client
        //if correct sms then save user and give him access
  }
  async signout(@Session() session: any) {
        //just signout
  }
  }
  