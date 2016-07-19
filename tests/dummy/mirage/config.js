import config from '../config/environment';
import { Response } from 'ember-cli-mirage';

const { serverURL } = config['ember-cli-superlogin'];

export default function() {

  this.post(`${serverURL}/register`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${serverURL}/login`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${serverURL}/refresh`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${serverURL}/logout`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${serverURL}/logout-others`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${serverURL}/logout-all`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${serverURL}/forgot-password`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${serverURL}/password-reset`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${serverURL}/password-change`, ()=>{
    return { response: 'ok' };
  });

  this.get(`${serverURL}/validate-username/:username`, (schema, request)=>{
    const username = request.params.username;
    if(username !== 'superlogin'){ return new Response(409); }
    return {};
  });

  this.get(`${serverURL}/validate-email/:email`, (schema, request)=>{
    const email = request.params.email;
    if(email !== 'super@login.com'){ return new Response(409); }
    return {};
  });

  this.post(`${serverURL}/change-email`, ()=>{
    return { response: 'ok' };
  });

  this.get(`${serverURL}/session`, ()=>{
    return { response: 'ok' };
  });
}
