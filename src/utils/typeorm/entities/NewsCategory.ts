import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class NewsCategory {
  @PrimaryGeneratedColumn()
  news_category_id: number;

  @Column()
  father_id: number;

  @Column()
  name: string;

  @Column()
  slug: string;
}
