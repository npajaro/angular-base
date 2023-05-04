import { Component, Input, EventEmitter, Output } from '@angular/core';
import { Character } from '../../interfaces/character.intercafe';


@Component({
  selector: 'dbz-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent {

  @Input()
  public characterList: Character[] = [{
    id: '',
    name: 'Trunks',
    power: 10
  }];


  // onDelete = Index value : number
  @Output()
  public onDelete: EventEmitter<string> = new EventEmitter();


  public onDeleteCharacter(id: string): void{
    // TODO: Emitir el ID del personaje
    this.onDelete.emit(id);
    console.log({id})
  }

}
