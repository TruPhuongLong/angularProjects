import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {ChildModule} from '../../child-components/child.module';
import {DirectiveModule} from '../../directives/directive.module';

import {ListProductComponent} from './list-product.component';

@NgModule({
    declarations: [
        ListProductComponent,
    ],
    imports: [
        CommonModule,
        ChildModule,
        DirectiveModule,
    ],
    exports: [
        ListProductComponent,
    ]
})

export class ListProductModule {}