import Layout from '../components/Layout.js'
import Link from 'next/link'

export default function Guide() {
  return (
    <Layout title='Insomnia - Guías'>
      <div class="row">
        <div class="col-1"></div>
        <div class="col-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Guía para moderadores</h5>
              <h6 class="card-subtitle mb-2 text-muted">Todo lo básico</h6>
              <p class="card-text">
                Guía que todos los moderadores deben seguir.
              </p>
              <div class="d-grid gap">
                <Link class='btn btn-primary' href='/guide/modsGuide'>Leer</Link>
              </div>
            </div> 
          </div>
        </div>
        <div class="col-3">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Guía para diseñadores</h5>
              <h6 class="card-subtitle mb-2 text-muted">Primeros pasos</h6>
              <p class="card-text">
                Guía que todos los diseñadores deben seguir.
              </p>
              <div class="d-grid gap">
                <Link class='btn btn-primary' href='/guide/modsGuide'>Leer</Link>
              </div>
            </div> 
          </div>
        </div>
        <div class="col-1"></div>
      </div>
    </Layout>
  )
}
