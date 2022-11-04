import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { ProxyService } from 'src/app/services/proxy.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  laptopForm = new FormGroup({
    type: new FormControl(''),
    brand: new FormControl(''),
    condition: new FormControl(''),
    ram: new FormControl(''),
    rom: new FormControl(''),
    processer: new FormControl(''),
    resoution: new FormControl(''),
    modelnumber: new FormControl(''),
    serialnumber: new FormControl(''),
    count: new FormControl(''),
    warrenty: new FormControl(''),
    price: new FormControl(''),
  });
  laptopsList:any = [];

  constructor(private proxyService: ProxyService) { }

  ngOnInit(): void {
    this.getLaptops();
  }
  getLaptops(){
    this.laptopsList = [];
    this.proxyService.GetItems('laptops').subscribe((res)=>{
      res.forEach((item)=>{
        let a:any = item.payload.toJSON();
          a['$key'] = item.key;
          this.laptopsList.push(a);
      })
    });
    console.log(this.laptopsList);
  }
  submitLaptop() {
    console.log(this.laptopForm.value);
    this.proxyService.AddItem('laptops',this.laptopForm.value);
    this.clear();
    this.getLaptops();
  }
  clear() {
    this.laptopForm = new FormGroup({
      type: new FormControl(''),
      brand: new FormControl(''),
      condition: new FormControl(''),
      ram: new FormControl(''),
      rom: new FormControl(''),
      processer: new FormControl(''),
      resoution: new FormControl(''),
      modelnumber: new FormControl(''),
      serialnumber: new FormControl(''),
      count: new FormControl(''),
      warrenty: new FormControl(''),
      price: new FormControl(''),
    });
  }
  editLaptop() {
    this.laptopForm.patchValue({
      ram: 'Nancy',
      rom:'wer'
    });
  }
}
