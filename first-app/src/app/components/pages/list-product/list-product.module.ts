import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChildModule} from '../../child-components/child.module'

import {ListProductComponent} from './list-product.component';

@NgModule({
    declarations: [
        ListProductComponent,
    ],
    imports: [
        CommonModule,
        ChildModule,
    ],
    exports: [
        ListProductComponent,
    ]
})

export class ListProductModule {}