import { Component, OnInit } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { map, filter } from 'rxjs/operators';
import { Router } from '@angular/router';
import { TestBed } from '@angular/core/testing';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  projects;
  img;
  uid;
  area = '';
  type = '';
  property: string;

  val1;
  val2;
  val3;
  val4;
  p;
  three;
  five;
  seven;
  ten;
  twelve;
  fifteen;
  twenty;
  marla;
  leng;
  filterres;
  findmarla;
  areaarray = new Array();
  areaData;
  sector;
  architect;
  constructor(private api: ApiService, private router: Router) { }

  ngOnInit() {

    this.showProjects();
    // this.showthreemarla();
  }
  showProjects() {
    this.api.getProjects().pipe(map(list => list.map(item => {
      let data = item.payload.doc.data();
      let id = item.payload.doc.id;
      return { id, ...data }
    }))).subscribe(res => {
      console.log(res);
      this.projects = res;
      console.log(this.projects[1].image.length);
      console.log(this.projects[1].uid);
      console.log(this.projects[0].uid);
      // this.api.getUser(id)
    })
  }
  profileView(i) {
    let id = i.uid;
    console.log(id);
    this.router.navigate(['profileview/' + id])
  }
  getFilter() {
    this.type = "Contractor";
    console.log(this.property);
    console.log(this.marla);
    console.log(this.property);
    if (this.property == 'residential' && this.marla == 'threemarla') {
      this.api.filterbyres(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.threemarla.rendprice != null && isPresente.threemarla.rstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);
        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'residential' && this.marla == 'fivemarla') {
      this.api.filterbyres(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.fivemarla.rendprice != null && isPresente.fivemarla.rstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);
        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'residential' && this.marla == 'sevenmarla') {
      this.api.filterbyres(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.sevenmarla.rendprice != null && isPresente.sevenmarla.rstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);
        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'residential' && this.marla == 'tenmarla') {
      this.api.filterbyres(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.tenmarla.rendprice != null && isPresente.tenmarla.rstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);
        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'residential' && this.marla == 'twelvemarla') {
      this.api.filterbyres(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.twelvemarla.rendprice != null && isPresente.twelvemarla.rstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);

        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'residential' && this.marla == 'fifteenmarla') {
      this.api.filterbyres(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.fifteenmarla.rendprice != null && isPresente.fifteenmarla.rstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);

        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'residential' && this.marla == 'twentymarla') {
      this.api.filterbyres(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.twentymarla.rendprice != null && isPresente.twentymarla.rstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);

        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'commercial') {

      this.commercialFIlter();
    }
  }
  commercialFIlter() {
    if (this.property == 'commercial' && this.marla == 'threemarla') {
      this.api.filterbycom(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.threemarla.cendprice != null && isPresente.threemarla.cstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);

        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'commercial' && this.marla == 'fivemarla') {
      this.api.filterbycom(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.fivemarla.cendprice != null && isPresente.fivemarla.cstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);

        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'commercial' && this.marla == 'sevenmarla') {
      this.api.filterbycom(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.sevenmarla.cendprice != null && isPresente.sevenmarla.cstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);

        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'commercial' && this.marla == 'tenmarla') {
      this.api.filterbycom(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.tenmarla.cendprice != null && isPresente.tenmarla.cstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);

        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'commercial' && this.marla == 'twelvemarla') {
      this.api.filterbycom(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.twelvemarla.cendprice != null && isPresente.twelvemarla.cstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);

        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'commercial' && this.marla == 'fifteenmarla') {
      this.api.filterbycom(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.fifteenmarla.cendprice != null && isPresente.fifteenmarla.cstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);

        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
    else if (this.property == 'commercial' && this.marla == 'twentymarla') {
      this.api.filterbycom(this.area, this.type, this.property).pipe(map(list => list.map(item => {
        let data = item.payload.doc.data();
        let id = item.payload.doc.id;
        this.areaData = data;
        this.areaarray = this.areaData.area;
        // this.sector=this.areaData.sector;
        console.log(this.sector);
        let isPresente = this.areaarray.find(e => e.name == this.area);
        let ispresentmarla = isPresente.twentymarla.cendprice != null && isPresente.twentymarla.cstartprice != null;
        console.log(ispresentmarla);
        console.log(isPresente);

        return { id, ...data, isPresente, ispresentmarla }
      }))).subscribe(res => {
        this.leng = res.length;
        this.filterres = res;
        console.log(this.filterres);
      })
    }
  }
  filterArchitect() {
    this.api.filterArchitect(this.area).pipe(map(list => list.map(item => {
      let data = item.payload.doc.data();
      let id = item.payload.doc.id;
      return { id, ...data }
    }))).subscribe(res => {
      console.log(res);
      
      this.architect=res;
      
    })
    
  }
  selectChangeHandler1(event: any) {
    this.val1 = event.target.value;
    console.log(this.val1);
    if (this.val1 == 'c') {
      this.property = 'commercial';
      console.log(this.property);

    }
    else if (this.val1 == 'r') {
      this.property = 'residential';
    }
  }
  selectChangeHandler2(event: any) {
    this.val2 = event.target.value;
    console.log(this.val2);

    if (this.val2 == 'Bahria Phase 7') {
      this.area = 'Bahria Phase 7';

    }
    else if (this.val2 == 'Sadar') {
      this.area = 'Sadar';
    }
    else if (this.val2 == 'Taxila') {
      this.area = 'Taxila';
    }
    else if (this.val2 == 'PWD') {
      this.area = 'PWD';
    }
  }
  selectChangeHandler3(event: any) {
    this.val3 = event.target.value;
    console.log(this.val3);
    if (this.val3 == '3') {
      this.marla = 'threemarla';

    }
    else if (this.val3 == '5') {
      this.marla = 'fivemarla';
    }
    else if (this.val3 == '7') {
      this.marla = 'sevenmarla';
    }
    else if (this.val3 == '10') {
      this.marla = 'tenmarla';
    }
    else if (this.val3 == '12') {
      this.marla = 'twelvemarla';
    }
    else if (this.val3 == '15') {
      this.marla = 'fifteenmarla';
    }
    else if (this.val3 == '20') {
      this.marla = 'twentymarla';
    }
  }
  selectChangeHandler4(event: any) {
    this.val2 = event.target.value;

    if (this.val2 == 'Bahria Phase 7') {
      this.area = 'Bahria Phase 7';

    }
    else if (this.val2 == 'Sadar') {
      this.area = 'Sadar';
    }
    else if (this.val2 == 'Taxila') {
      this.area = 'Taxila';
    }
    else if (this.val2 == 'PWD') {
      this.area = 'PWD';
    }
  }
  filterMarla() {
    for (let i = 0; i < this.leng; i++) {
      console.log(this.filterres[i]);

      console.log(this.filterres[i].area[i].twelvemarla.rstartprice);
      this.findmarla = this.filterres[i].area[i].twelvemarla.rendprice;
      console.log(this.findmarla);

    }
  }
}
