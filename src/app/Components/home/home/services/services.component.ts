import { DataService } from './../../../../enum/Services/data.service';
import { Component } from '@angular/core';
import { GenralService } from '../../../../enum/Services/genral.service';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrl: './services.component.scss'
})
export class ServicesComponent {
  constructor(private DataService: DataService, private GenralServices: GenralService) { }

  CartWashes: any = []
  first: number = 0;
  rows: number = 20;

  ngOnInit() {
    this.GetAllCarWashesFromServices()
  }

  GetAllCarWashesFromServices() {

    this.DataService.getCarWashData(this.first, this.rows).subscribe(
      (res: any) => {
        res.result.carWashes.map((ele: any) => {
          this.CartWashes.push(ele.carWash)

        })
      }
    );
  }

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
    console.log(this.CartWashes)
    console.log("first",this.first)
    console.log("rows",this.rows)
    this.GetAllCarWashesFromServices()
  }

  UpdateCartWashes() {
    this.GenralServices.$ShowDilog.next(true)
  }

}
