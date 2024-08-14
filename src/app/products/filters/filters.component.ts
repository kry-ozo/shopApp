import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormsModule } from '@angular/forms';

@Component({
  selector: 'app-filters',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './filters.component.html',
  styleUrl: './filters.component.scss'
})
export class FiltersComponent {

  @Output() filter = new EventEmitter<string>()
  
  onSelectChange(val:Event){
    this.filter.emit(this.sortBy)
  }
  sortBy = ""
}
