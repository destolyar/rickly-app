import React, { ReactNode } from "react";
import { NamedEntity } from "../entities/named-entity";
import '../../styles/components/dropdown.scss';

export interface DropdownProps {
    items: NamedEntity[];
    defaultValue: NamedEntity;
}

export interface DropdownState {
    value: NamedEntity;
    isOpen: boolean;
}

export class Dropdown extends React.Component<DropdownProps, DropdownState> {
    constructor(props: DropdownProps) {
        super(props);
        this.state = { value: props.defaultValue, isOpen: false };

        this.toggle = this.toggle.bind(this);
    }

    render(): ReactNode {
        return (
            <div className="app-dropdown_wrapper">
                <div className="app-dropdown" onClick={this.toggle}>
                    <div className="app-dropdown__value">{this.state.value.name}</div>
                    <div className={`app-dropdown__chevron${this.state.isOpen ? ' app-dropdown__chevron_opened' : ''}`}>
                        {this.chevron()}
                    </div>
                </div>
                {this.state.isOpen ? this.renderOverlay() : null}
            </div>
        )
    }

    renderOverlay(): ReactNode {
        const items: ReactNode[] = this.props.items.map((item: NamedEntity) => {
            return <div className="app-dropdown__item" onClick={() => this.select(item)}>{item.name}</div>
        });
        return (
            <div className="app-dropdown__overlay">{items}</div>
        );
    }

    toggle() {
        this.setState({ ...this.state, isOpen: !this.state.isOpen });
    }

    select(item: NamedEntity): void {
        this.setState({ value: item, isOpen: false });
    }

    chevron(): ReactNode {
        return (<svg version="1.1" id="Capa_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
        viewBox="0 0 185.343 185.343">
        <g>
            <g>
                <path d="M51.707,185.343c-2.741,0-5.493-1.044-7.593-3.149c-4.194-4.194-4.194-10.981,0-15.175
                    l74.352-74.347L44.114,18.32c-4.194-4.194-4.194-10.987,0-15.175c4.194-4.194,10.987-4.194,15.18,0l81.934,81.934
                    c4.194,4.194,4.194,10.987,0,15.175l-81.934,81.939C57.201,184.293,54.454,185.343,51.707,185.343z"/>
            </g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        <g>
        </g>
        </svg>
   )
    }
}