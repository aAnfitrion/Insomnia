import Head from 'next/head'
import Link from 'next/link'
import Image from 'next/image'

function Layout(props) {
  return (
    <>
      <Head>
        <title>{props.title}</title>
        <link rel='shortcut icon' href='icon.png'/>
      </Head>
      <nav class='navbar navbar-expand-lg bg-body-tertiary mb-4'>
        <div class='container-fluid'>
          <Link class='navbar-brand' href='/'>
            <Image src='/logo.png' alt='Logo' width='24' height='24' class='d-inline-block align-text-top' />
            Insomnia
          </Link>
          <button
            class='navbar-toggler'
            type='button'
            data-bs-toggle='collapse'
            data-bs-target='#navbarText'
            aria-controls='navbarText'
            aria-expanded='false'
            aria-label='Toggle navigation'
          >
            <span class='navbar-toggler-icon'></span>
          </button>
          <div class='collapse navbar-collapse' id='navbarText'>
            <ul class='navbar-nav me-auto mb-2 mb-lg-0'>
              <li class='nav-item'>
                <Link href='/' class='nav-link'>Inicio</Link>
              </li>
              <li class='nav-item'>
                <Link href='/guide' class='nav-link'>Guías</Link> 
              </li>
            </ul>
            <span class='navbar-text'>Página web en progreso</span>
          </div>
        </div>
      </nav>
      {props.children}
    </>
  );
}

export default Layout;
