import { Component, OnInit } from '@angular/core';
import { Products } from '../../models/product.model';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.scss']
})
export class ProductListComponent implements OnInit {

  products: Array<Products> = [
    { nome: 'Caderno 10 matérias', preco: 10, img: "https://images.unsplash.com/photo-1526429450415-2b979b89d228?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTd8fG5vdGVib29rc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    { nome: 'Planner', preco: 15, img: "https://images.unsplash.com/photo-1518226203301-8e7f833c6a94?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTR8fG5vdGVib29rc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    { nome: 'Agenda 2022', preco: 55, img: "https://images.unsplash.com/photo-1601001435957-74f0958a93fb?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bm90ZWJvb2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    { nome: 'Caderno universitário 1 matéria', preco: 12, img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQo1tu8uS1NSr27KhH3v9f3jk1vAi1SKRnAgw&usqp=CAU"},
    { nome: 'Caderno brochura', preco: 30, img: "https://images.unsplash.com/photo-1621168854680-9250096b4a27?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8bm90ZWJvb2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    { nome: 'Caderno espiral', preco: 30, img: "https://images.unsplash.com/photo-1568639152391-61b4303bead7?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTV8fG5vdGVib29rc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    { nome: 'Caderno espiral 1 matéria', preco: 10, img: "https://images.unsplash.com/photo-1612599316791-451087c7fe15?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8bm90ZWJvb2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    { nome: 'Agenda com Capa de Couro', preco: 45, img: "https://images.unsplash.com/photo-1617177435596-1c9e30d6d608?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MTJ8fG5vdGVib29rc3xlbnwwfHwwfHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    { nome: 'Caderno tipo Moleskine', preco: 35, img: "https://images.unsplash.com/photo-1531346618680-ab17d6dcd07c?ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8bm90ZWJvb2tzfGVufDB8fDB8fA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"},
    { nome: 'Bloco de Notas', preco: 5, img: "https://media.istockphoto.com/photos/note-pad-and-pencil-picture-id1271863211?b=1&k=20&m=1271863211&s=170667a&w=0&h=j0qujbTbIX3bLDADBzk352ku8XW5NxA6gNw13Z60Pdw="}
  ]

  constructor() { }

  ngOnInit(): void {
  }

}
