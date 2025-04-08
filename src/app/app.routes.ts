import { Routes } from '@angular/router';
import { HeaderComponent } from './components/header/header.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { ChatComponent } from './components/pages/chat/chat.component';

export const routes: Routes = [
    {
        path: 'formulario',
        component: FormularioComponent,
        title: 'Inicio de session'
    },
    { 
        path: 'header', 
        component: HeaderComponent
    },
    {
        path: '',
        component: HeaderComponent,
        title: 'Inicio'
    },
    {
        path: 'chat',
        component: ChatComponent,
        title: 'chat'
    }
];
