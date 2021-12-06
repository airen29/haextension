import select from 'select-dom'

const sponsorMenuSelector = `a[href='index.php?index.php&p=public_shop.php']`

export default () => {
  const sponsorMenuItem = select(sponsorMenuSelector)

  if (sponsorMenuItem) {
    sponsorMenuItem.remove()
  }
}
