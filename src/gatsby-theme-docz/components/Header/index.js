/** @jsx jsx */
import { jsx, Box, Flex } from 'theme-ui'
import { useConfig, useCurrentDoc } from 'docz'

import * as styles from 'gatsby-theme-docz/src/components/Header/styles'
import { Edit, Menu, Github } from 'gatsby-theme-docz/src/components/Icons'
import { Logo } from 'gatsby-theme-docz/src/components/Logo'
import Search from './Search/'

export const Header = props => {
  const { onOpen } = props
  const {
    repository,
    themeConfig: {showMarkdownEditButton },
  } = useConfig()
  const { edit = true, ...doc } = useCurrentDoc()
  // const [colorMode, setColorMode] = useColorMode()

  // const toggleColorMode = () => {
  //   setColorMode(colorMode === 'light' ? 'dark' : 'light')
  // }

  return (
    <div sx={styles.wrapper} data-testid="header">
      <Box sx={styles.menuIcon}>
        <button sx={styles.menuButton} onClick={onOpen}>
          <Menu size={25} />
        </button>
      </Box>
      <div sx={styles.innerContainer}>
        <Logo />

        <Flex>
          {/* {showDarkModeSwitch && (
            <button sx={styles.headerButton} onClick={toggleColorMode}>
              <Sun size={15} />
            </button>
          )} */}
          <Search />
          {repository && (
            <Box sx={{ mr: 2 }}>
              <a
                href={repository}
                sx={styles.headerButton}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github size={15} />
              </a>
            </Box>
          )}
        </Flex>
        {showMarkdownEditButton && edit && doc.link && (
          <a
            sx={styles.editButton}
            href={doc.link}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Edit width={14} />
            <Box sx={{ pl: 2 }}>Edit page</Box>
          </a>
        )}
      </div>
    </div>
  )
}
