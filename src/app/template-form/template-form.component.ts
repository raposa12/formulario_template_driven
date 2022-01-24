import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';  
import { map } from 'rxjs/operators';//Nem precisa

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css'],
})
export class TemplateFormComponent implements OnInit {

  //variavel dos cadstro
  usuario: any = {
    nome: null,
    email: null,
  }

  //Metodo para aceitar os valores dos campos formularios
  onSubmit(form: any){
    console.log(form)

    //console.log(this.usuario);

    //enviando os dados pro servidor
    this.http.post('https://httpbin.org/post', JSON.stringify(form.value))
    .subscribe(data => console.log(data));
  }

  //
  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  //se nao prencher e clicar  fora do campo ele fica vermelho de obrigaçao
  verificaValidTouched(campo: any){
    return !campo.valid && campo.touched;
  }

  //erro dos campos em vermelho
  aplicaCssErro(campo: any){
    return {
      'has-error': this.verificaValidTouched(campo),
      'has-feedback': this.verificaValidTouched(campo)
    }
  }

  //api pra pegar o cep cadatrado
  consultaCEP(cep: any, form: any) {

    //Nova variável "cep" somente com dígitos.
    cep = cep.replace(/\D/g, '');

    //chamado o metodo para resetar o formulario
    this.resetaDadosForm(form);

    //Verifica se campo cep possui valor informado.
    //Expressão regular para validar o CEP.
    if (cep !== '') {
        this.http.get(`https://viacep.com.br/ws/${cep}/json`)

          .subscribe(data => this.populaDadosForm(data, form));
    }

  }

    //Não precisa mais
  populaDadosForm(data: any, formulario: any){
   /* formulario.setValue({
      nome: formulario.value.nome,
      email: formulario.value.email,
      endereco: {
        rua: data.logradouro,
        cep: data.cep,
        numero: '',
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      }
    });*/

    //possiblita adicinonar o email e o nome nos campos juntos com os valores abaixos
    formulario.form.patchValue({
      endereco: {
        rua: data.logradouro,
        //cep: data.cep,
        complemento: data.complemento,
        bairro: data.bairro,
        cidade: data.localidade,
        estado: data.uf,
      }

    });
  }

  //metodo paara resetar o formulario
  //possiblita alterar o dado do formulario
  resetaDadosForm(formulario: any){
    formulario.form.patchValue({
      endereco: {
        rua: null,
        complemento: null,
        bairro: null,
        cidade: null,
        estado: null,
      }

    });

  }

}
        
    

  

 
