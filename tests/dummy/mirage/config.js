import config from '../config/environment';
import { Response } from 'ember-cli-mirage';

const { server } = config['ember-cli-superlogin'];

export default function() {

  this.post(`${server}/register`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${server}/login`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${server}/refresh`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${server}/logout`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${server}/logout-others`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${server}/logout-all`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${server}/forgot-password`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${server}/password-reset`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${server}/password-change`, ()=>{
    return { response: 'ok' };
  });

  this.get(`${server}/validate-username/:username`, (schema, request)=>{
    const username = request.params.username;
    if(username !== 'superlogin'){ return new Response(409); }
    return {};
  });

  this.get(`${server}/validate-email/:email`, ()=>{
    return { response: 'ok' };
  });

  this.post(`${server}/change-email`, ()=>{
    return { response: 'ok' };
  });

  this.get(`${server}/session`, ()=>{
    return { response: 'ok' };
  });
}
