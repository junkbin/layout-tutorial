import { Routes } from '@angular/router';
import { Page1Component } from './page1/page1.component';
import { Page2Component } from './page2/page2.component';
import { Page3Component } from './page3/page3.component';
import { Page4Component } from './page4/page4.component';
import { Page5Component } from './page5/page5.component';
import { Page6Component } from './page6/page6.component';
import { Page7Component } from './page7/page7.component';
import { Page8Component } from './page8/page8.component';
import { Page9Component } from './page9/page9.component';
import { Page10Component } from './page10/page10.component';
import { Page11Component } from './page11/page11.component';
import { Page12Component } from './page12/page12.component';


export const appRoutes: Routes = [
    {path: 'page1', component: Page1Component},
    {path: 'page2', component: Page2Component},
    {path: 'page3', component: Page3Component},
    {path: 'page4', component: Page4Component},
    {path: 'page5', component: Page5Component},
    {path: 'page6', component: Page6Component},
    {path: 'page7', component: Page7Component},
    {path: 'page8', component: Page8Component},
    {path: 'page9', component: Page9Component},
    {path: 'page10', component: Page10Component},
    {path: 'page11', component: Page11Component},
    {path: 'page12', component: Page12Component},
    {path: '', redirectTo: '/page1', pathMatch: 'full'}
];

export const appComponents = [
                    Page1Component, Page2Component, Page3Component, Page4Component,
                    Page5Component, Page6Component, Page7Component, Page8Component,
                    Page9Component, Page10Component, Page11Component, Page12Component
                ];
