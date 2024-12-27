import { Component, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, FormControl, Validators } from '@angular/forms';

import { Subscription } from 'rxjs';
import { DataService } from '../../../../enum/Services/data.service';
import { GenralService } from '../../../../enum/Services/genral.service';

@Component({
  selector: 'app-dilog-update',
  templateUrl: './dilog-update.component.html',
  styleUrl: './dilog-update.component.scss'
})
export class DilogUpdateComponent implements OnDestroy {
  visible: any
  Supscrption!: Subscription
  myForm!: FormGroup;
  selectedImage: string | ArrayBuffer | null = null;

  constructor(private GenralServices: GenralService, private FB: FormBuilder , private DataServices:DataService) { }
  ngOnInit() {
    this.showDialog()
    this.CreateForm()
  }


  CreateForm() {
    this.myForm = this.FB.group({
      Id: [6],
      NameAr: ['carWashTest', Validators.required],
      NameEn: ['carWashTest', Validators.required],
      DescAr: ['carWashTest', Validators.required],
      DescEn: ['carWashTest', Validators.required],
      Rate: [30.1],
      RateCount: [33],
      TotalRate: [3],
      Longitude: [33.222],
      Latitude: [31.222],
      AddressOnMap: ['fff'],
      UserId: [7],
      User: this.FB.group({
        EmailAddress: ['carWashTest@gmail.com', Validators.required],
        PhoneNumber: ['055555', Validators.required],
        Password: ['123456', Validators.required],
        IsActive: [true],
        Avatar: ['ffff.png']
      })
    });
  }

  onFileChange(event: any) {
    const file = event.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = () => {
        this.selectedImage = reader.result as string;
        this.myForm.get('User.Avatar')?.setValue(file.name)
      };
      reader.readAsDataURL(file);
    }
  }





  UpateData(){
this.DataServices.UpdateDataAashes(this.myForm.value).subscribe((res:any)=>{
  console.log(res)
})
  }

  showDialog() {
    this.Supscrption = this.GenralServices.$ShowDilog.subscribe((res) => {
      this.visible = res
    })
  }


  closeDilog() {
    this.GenralServices.$ShowDilog.next(false)
  }

  ngOnDestroy() {
    if(this.Supscrption){
      this.Supscrption.unsubscribe()
    }
  }


}
