import { Routes } from '@angular/router';
import { HomeComponent } from '../components/home/home.component';
import { PageNotFoundComponent } from '../components/page-not-found/page-not-found.component';
import { AboutComponent } from '../components/about/about.component';
import { ContactUsComponent } from '../components/contact-us/contact-us.component';
import { BooksComponent } from '../components/books/books.component';

export const routes: Routes = [
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    },
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutComponent
    },
    {
        path: 'contactus',
        component: ContactUsComponent
    },
    {
        path: 'books',
        component: BooksComponent
    },
    {
        path: '**',
        component: PageNotFoundComponent
    }
];
