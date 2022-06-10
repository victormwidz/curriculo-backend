import { 
    Entity, 
    BaseEntity,
    PrimaryColumn,
    Column
 } from 'typeorm';

@Entity({ name: 'contatos' })
export class ContatosEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    nome: string;

    @Column()
    telefone: string;

    @Column()
    email: string;

    constructor(nome: string, telefone: string, email: string) {
        super();
        this.nome = nome;
        this.telefone = telefone;
        this.email = email;
    }
}
