import { Component, Input} from '@angular/core';
import { BusquedaResultadoService } from '../busqueda-resultado.service';
import { ReactiveFormsModule, FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-buscador',
  standalone: false,
  templateUrl: './buscador.component.html',
  styleUrl: './buscador.component.scss'
})

export class BuscadorComponent {

    constructor(private busquedaService: BusquedaResultadoService) {}

    busquedaForm: FormGroup = new FormGroup({
        busqueda: new FormControl('',[Validators.required, Validators.minLength(1)])
    });

    activarBusqueda() {
        this.busquedaService.buscar(this.busquedaForm.get('busqueda')?.value);
        this.busquedaService.mostrar();
    }
}

