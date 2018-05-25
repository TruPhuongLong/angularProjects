import {NgModule} from '@angular/core';

import {ChildModule} from '../../child-components/child.module'

import {ListProductComponent} from './list-product.component';

@NgModule({
    declarations: [
        ListProductComponent,
    ],
    imports: [
        ChildModule,
    ],
    exports: [
        ListProductComponent,
    ]
})

export class ListProductModule {}