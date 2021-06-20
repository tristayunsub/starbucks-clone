import { motion } from 'framer-motion';
import * as React from 'react';  //use rfce
import { Link } from "react-router-dom";
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import ChevronRightIcon from '@material-ui/icons/ChevronRight';

const variants = {
    open: {
      y: 0,
      opacity: 1,
      transition: {
        y: { stiffness: 1000, velocity: -100 },
      },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: {
        y: { stiffness: 1000 },
      },
    },
  }
  
  // const colors = ['#FF008C', '#D309E1', '#9C1AFF', '#7700FF', '#4400FF']
  
  export const MenuLink = ({ link, path, icon, goBackIcon, onClick, width }) => {
    return (
      <>
        <Link to={path}>
          <motion.li
            style={{ width }}
            onClick={onClick}
            variants={variants}
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
          >
            {goBackIcon && <ChevronLeftIcon fontSize='large' />}
            {link}
            {icon && <ChevronRightIcon fontSize='large' />}
          </motion.li>
        </Link>
      </>
    )
  }