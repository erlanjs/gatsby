import * as React from "react"
import PropTypes from "prop-types"
import { Link } from "gatsby"

const Header = () => (
  <header className="bg-[#1F1F1F] py-5 fixed w-full">
    <div className="container mx-auto w-[90%] text-center">
        <a href="#" className="text-white mx-5 text-[15px] no-underline">О компании</a>
        <a href="#" className="text-white mx-5 text-[15px] no-underline">Products</a>
        <a href="#" className="text-white mx-5 text-[15px] no-underline">Наша команда</a>
        <a href="#" className="text-white mx-5 text-[15px] no-underline">Контакты</a>
    </div>
  </header>
)


export default Header
