import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('role')
export class Role {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({ type: 'varchar' , length: 50 , nullable: false})
    name: string;

    @Column({type: 'varchar', length: 3000, })
    description: String;

    @Column( {type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    created_at: Date;

    @Column({type: 'timestamp', default: () => 'CURRENT_TIMESTAMP'})
    updated_at: Date;
}