import { Injectable } from '@angular/core';

export interface User {
    id: number;
    nombre: string;
    ciudad: string;
    email: string;
    telefono: string;
    fechaNacimiento: string;
    calle: string;
    codigoPostal: string;
    notificacionesEmail: boolean;
    notificacionesPush: boolean;
    boletinNoticias: boolean;
    perfilPublico: boolean;
    autenticacionDosFactores: boolean;
    idioma: string;
    zonaHoraria: string;
    compras: Purchase[];
}

export interface Purchase {
    id: string;
    fecha: string;
    estado: 'Completado' | 'En Proceso';
    items: PurchaseItem[];
    total: number;
}

export interface PurchaseItem {
    nombre: string;
    cantidad: number;
    precio: number;
}

@Injectable({
    providedIn: 'root'
})
export class UserDataService {
    private users: User[] = [
        {
            id: 1,
            nombre: 'Alberto García',
            ciudad: 'Sevilla',
            email: 'alberto.garcia@example.com',
            telefono: '+34 600 123 456',
            fechaNacimiento: '15/03/1990',
            calle: 'Calle Principal, 123',
            codigoPostal: '41001',
            notificacionesEmail: true,
            notificacionesPush: false,
            boletinNoticias: true,
            perfilPublico: true,
            autenticacionDosFactores: false,
            idioma: 'es',
            zonaHoraria: 'Europe/Madrid',
            compras: [
                {
                    id: '12345',
                    fecha: '15 de Enero, 2024',
                    estado: 'Completado',
                    items: [
                        { nombre: 'Laptop Dell XPS 15', cantidad: 1, precio: 1299.00 },
                        { nombre: 'Mouse Inalámbrico', cantidad: 1, precio: 29.99 }
                    ],
                    total: 1328.99
                },
                {
                    id: '12344',
                    fecha: '10 de Enero, 2024',
                    estado: 'Completado',
                    items: [
                        { nombre: 'Auriculares Sony WH-1000XM4', cantidad: 1, precio: 349.00 },
                        { nombre: 'Cable USB-C', cantidad: 2, precio: 9.99 }
                    ],
                    total: 368.98
                }
            ]
        },
        {
            id: 2,
            nombre: 'María López',
            ciudad: 'Madrid',
            email: 'maria.lopez@example.com',
            telefono: '+34 600 234 567',
            fechaNacimiento: '22/07/1988',
            calle: 'Avenida Gran Vía, 45',
            codigoPostal: '28013',
            notificacionesEmail: true,
            notificacionesPush: true,
            boletinNoticias: false,
            perfilPublico: true,
            autenticacionDosFactores: true,
            idioma: 'es',
            zonaHoraria: 'Europe/Madrid',
            compras: [
                {
                    id: '12343',
                    fecha: '5 de Enero, 2024',
                    estado: 'En Proceso',
                    items: [
                        { nombre: 'Teclado Mecánico RGB', cantidad: 1, precio: 89.99 }
                    ],
                    total: 89.99
                },
                {
                    id: '12342',
                    fecha: '28 de Diciembre, 2023',
                    estado: 'Completado',
                    items: [
                        { nombre: 'Monitor LG 27" 4K', cantidad: 1, precio: 449.00 },
                        { nombre: 'Soporte para Monitor', cantidad: 1, precio: 59.99 }
                    ],
                    total: 508.99
                },
                {
                    id: '12341',
                    fecha: '20 de Diciembre, 2023',
                    estado: 'Completado',
                    items: [
                        { nombre: 'Tablet Samsung Galaxy Tab', cantidad: 1, precio: 399.00 }
                    ],
                    total: 399.00
                }
            ]
        },
        {
            id: 3,
            nombre: 'Juan Martínez',
            ciudad: 'Barcelona',
            email: 'juan.martinez@example.com',
            telefono: '+34 600 345 678',
            fechaNacimiento: '10/11/1992',
            calle: 'Passeig de Gràcia, 92',
            codigoPostal: '08008',
            notificacionesEmail: false,
            notificacionesPush: true,
            boletinNoticias: true,
            perfilPublico: false,
            autenticacionDosFactores: false,
            idioma: 'es',
            zonaHoraria: 'Europe/Madrid',
            compras: [
                {
                    id: '12340',
                    fecha: '12 de Enero, 2024',
                    estado: 'Completado',
                    items: [
                        { nombre: 'Smartphone iPhone 15 Pro', cantidad: 1, precio: 1199.00 },
                        { nombre: 'Funda Protectora', cantidad: 1, precio: 39.99 }
                    ],
                    total: 1238.99
                },
                {
                    id: '12339',
                    fecha: '3 de Enero, 2024',
                    estado: 'Completado',
                    items: [
                        { nombre: 'Smartwatch Apple Watch', cantidad: 1, precio: 429.00 }
                    ],
                    total: 429.00
                }
            ]
        }
    ];

    getUserById(id: number): User | undefined {
        return this.users.find(user => user.id === id);
    }

    getAllUsers(): User[] {
        return this.users;
    }
}

