import React from "react";
import Input from 'components/atoms/Input';
import Button from 'components/atoms/Button';

import { ReactComponent as SearchIcon } from 'images/icon/search-icon.svg';

import style from "./index.module.scss";

const SearchInput = ({
    placeholder = ''
}) => {
    return (
        <form className={style.search}>
            <Input
                placeholder={placeholder}
            />
            <Button>
                <SearchIcon />
            </Button>
        </form>
    );
}

export default SearchInput;
