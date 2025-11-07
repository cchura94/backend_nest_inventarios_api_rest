import { IsEmail, IsNotEmpty, Matches, MaxLength, MinLength } from "class-validator";

export class LoginAuthDto{
    
    @IsEmail()
    @IsNotEmpty()
    email: string;
    
    @MinLength(6)
    @MaxLength(30)
    @IsNotEmpty()
    @Matches(/^[A-Za-z0-9]+$/)
    password: string;
}