import {react} from 'react'
import '../assets/css/home.css'
import Skill from '../assets/react.svg';

export default function Home() {
  return (
    <div className="p-4 mt-4 text-center">
        <div className="user">
            <i className="ri-user-3-line"></i>
        </div>
      <div className="texto">
        <h2 className='align-content-end mt-4 mb-3'>Inocêncio José</h2>
        <p>Bem-vindo ao MeuApp com React Router e Bootstrap!</p>
        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facilis temporibus eaque vel, quia adipisci doloremque laboriosam quas delectus quam. Dolorum ducimus quas exercitationem harum eius, aliquid quibusdam? Magni, sapiente corporis.</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quia aperiam, delectus maxime distinctio quae dolores possimus aspernatur architecto temporibus, eos quo in, repudiandae eum. Fugiat aperiam ducimus tenetur corrupti voluptatibus!</p>
      </div>
      <h2>Minhas habilidades</h2>
      <div className="skils">
        <div className="row">
            <div className="skil card p-3 shadow-sm mt-4">
                <i className="ri-nodejs-line skil-img"></i>
                <div className="texto mt">
                    <p>Node JS</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="skil card p-3 shadow-sm mt-4">
                <i className="ri-javascript-line skil-img"></i>
                <div className="texto">
                    <p>Javascript</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="skil card p-3 shadow-sm mt-4">
                <i className="ri-html5-line skil-img"></i>
                <div className="texto">
                    <p>Html</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="skil card p-3 shadow-sm mt-4">
                <i className="ri-css3-line skil-img"></i>
                <div className="texto">
                    <p>CSS</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="skil card p-3 shadow-sm mt-4">
                <img src={Skill} alt="skil" className="skil-img" />
                <div className="texto">
                    <p>Materialize Css</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="skil card p-3 shadow-sm mt-4">
                <i className="ri-bootstrap-line skil-img"></i>
                <div className="texto">
                    <p>Bootstrap</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="skil card p-3 shadow-sm mt-4">
                <i className="ri-php-line skil-img"></i>
                <div className="texto">
                    <p>PHP</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="skil card p-3 shadow-sm mt-4">
                <img src={Skill} alt="skil" className="skil-img" />
                <div className="texto">
                    <p>MySql</p>
                </div>
            </div>
        </div>
        <div className="row">
            <div className="skil card p-3 shadow-sm mt-4">
                <i className="ri-reactjs-line skil-img"></i>
                <div className="texto">
                    <p>React JS</p>
                </div>
            </div>
        </div>
      </div>
      <h2 className='mt-4 left'>Meus Projetos</h2>
    </div>
  );
}