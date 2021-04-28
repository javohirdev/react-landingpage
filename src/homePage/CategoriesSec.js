import React, {useState} from 'react';
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import MenuIcon from '@material-ui/icons/Menu';


const CategoriesSec = () => {

    const [dropdownOpen, setOpen] = useState(false);

    const toggle = () => setOpen(!dropdownOpen);

    return (
        <div className="categories">
            <ButtonDropdown isOpen={dropdownOpen} toggle={toggle}>
                <DropdownToggle caret>
                    <MenuIcon className="menuIcon" />
                    All categories
                </DropdownToggle>
                <DropdownMenu>
                    <DropdownItem>Menu 1</DropdownItem>
                    <DropdownItem>Menu 2</DropdownItem>
                    <DropdownItem>Menu 3</DropdownItem>
                </DropdownMenu>
            </ButtonDropdown>

            <ul className="links">
                <li className="link_item">
                    <a href="#" className="link active">
                        Home
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        New arrivals
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Trending
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Deals for you
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Discounts
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Weekly offers
                    </a>
                </li>
                <li className="link_item">
                    <a href="#" className="link">
                        Become a ventor
                    </a>
                </li>
            </ul>
        </div>
    );
};

export default CategoriesSec;