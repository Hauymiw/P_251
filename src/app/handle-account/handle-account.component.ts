import { Component } from '@angular/core';
import { HeaderComponent } from '../header/header.component';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-handle-account',
  imports: [HeaderComponent,CommonModule,FormsModule  ],
  templateUrl: './handle-account.component.html',
  styleUrl: './handle-account.component.css',
})
export class HandleAccountComponent {
  constructor(private router: Router) {}
  selectedMonth = 'all'; 
  handelcontact = [
    { HPNO: '312-845231', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 5 },
    { HPNO: '312-394582', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 4 },
    { HPNO: '312-728491', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 3 },
    { HPNO: '312-561230', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 2 },
    { HPNO: '312-984612', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 1 },
    { HPNO: '312-673845', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 6 },
    { HPNO: '312-490273', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 5 },
    { HPNO: '312-315689', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 4 },
    { HPNO: '312-782340', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 3 },
    { HPNO: '312-604912', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 2 },
    { HPNO: '312-491027', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 1 },
    { HPNO: '312-830276', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 1 },
    { HPNO: '312-592784', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 1 },
    { HPNO: '312-760143', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 1 },
    { HPNO: '312-437820', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 2 },
    { HPNO: '312-561489', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 2 },
    { HPNO: '312-674213', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 2 },
    { HPNO: '312-318465', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 4 },
    { HPNO: '312-927104', FNAM: 'ธัญญารัตน์', LNAM: 'ละชินลา', DUE: '02/10/2025', CADD: '888 ซ.จตุโชติ 10 ถ.จตุโชติ แขวงออเงิน เขตสายไหม กรุงเทพมหานคร 10220', PMT: '2,123', OD_MON: '1', OD_BATH: '2123', month: 2 },
  ];

  selectedContract: any = null;
  

  
  filterdata = [...this.handelcontact];

  
  filterData() {
    if (this.selectedMonth === 'all') {
      this.filterdata = [...this.handelcontact];
      console.log(this.selectedMonth)
    } else {
      const monthNum = Number(this.selectedMonth);
      this.filterdata = this.handelcontact.filter(d => d.month === monthNum);
      console.log(this.selectedMonth)
    }
  }

  selectContract(item: any) {
    this.selectedContract = item;
    this.router.navigate(['/contract-detail', item.HPNO]); 
    console.log('เลือกเลขสัญญา:', item.HPNO);
  }
}
