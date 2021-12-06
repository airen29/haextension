/* eslint-disable import/prefer-default-export */
import select from 'select-dom'

export const isLoggedIn = () =>
  !select.exists('.menuLeft > a:nth-child(14)')
