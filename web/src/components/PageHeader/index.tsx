import React from 'react';
import { Link } from 'react-router-dom';
import backIcon from '../../assets/images/icons/back.svg';
import logoImg from '../../assets/images/logo.svg';
import './styles.css';

interface PageHeaderProps {
    title: string;
    description?: string;
}

const PageHeader: React.FunctionComponent<PageHeaderProps> = (props) => {
    return (
        <header className="page-header">
            <div className="top-bar-container">
                <Link to="/">
                    <img src={backIcon} alt="Voltar" />
                </Link>
                <img src={logoImg} alt="Proffy" />
            </div>

            <div className="header-content">
                <strong>{props.title}</strong>
                
                { props.description && <p>{props.description}</p>}
                {props.children}
            </div>
        </header>
    );
}

// { props.description && <p>{props.description}</p>} é um if que so vai mostrar a descricao se o props.description for verdadeiro, caso contgrario ele nao vai mostrar o "<p>"
// se lê: props.description ? <p>{props.description}</p> : null

export default PageHeader;