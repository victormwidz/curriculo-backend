import { 
    Entity, 
    BaseEntity,
    PrimaryColumn,
    Column
 } from 'typeorm';

@Entity({ name: 'recados' })
export class RecadosEntity extends BaseEntity {
    @PrimaryColumn()
    id?: number;

    @Column()
    nome: string;

    @Column()
    recado: string;

    constructor(nome: string, recado: string) {
        super();
        this.nome = nome;
        this.recado = recado;
    }
}
