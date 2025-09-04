describe('Registro de Usuario en Ticketazo', () => {

  beforeEach(() => {
    cy.visit('https://ticketazo.com.ar/auth/registerUser')
  })

  it('Debe registrar un nuevo usuario correctamente', () => {

    const randomDni = Math.floor(10000000 + Math.random() * 90000000) // 8 dígitos
    const randomEmail = `usuario_${Date.now()}@ejemplo.com`

    cy.get('input[name="nombres"]').type('Tester')
    cy.get('input[name="apellido"]').type('Aleatorio')
    cy.get('input[name="telefono"]').type('1234567890')
    cy.get('input[name="dni"]').type(randomDni.toString()) // DNI único
    cy.get('[data-cy="select-provincia"]').click()   
    cy.contains('li', 'Córdoba').click() 
    cy.get('[data-cy="select-localidad"]').click().type('Cordoba');
    cy.contains('.cursor-pointer', 'Córdoba').click();
    cy.contains('dd').type('07')
    cy.contains('mm').type('12')
    cy.contains('aaaa').type('1995')
    cy.get('input[name="email"]').type(randomEmail) // Email único
    cy.get('input[name="confirmarEmail"]').type(randomEmail)
    cy.get('input[name="password"]').type('ContraseñaSegura123')
    cy.get('[data-cy="input-repetir-password"]').type('ContraseñaSegura123')
    cy.get('button[type="submit"]').click()
   
    //cy.get('input[name="nombres"]').type('Tester')
    //cy.get('input[name="apellido"]').type('SantexAd')
    //cy.get('input[name="telefono"]').type('1234567890')
    //cy.get('input[name="dni"]').type('35148645')
    //cy.get('[data-cy="select-provincia"]').click()   
    //cy.contains('li', 'Córdoba').click() 
    //cy.get('[data-cy="select-localidad"]').click().type('Cordoba');
    //cy.contains('.cursor-pointer', 'Córdoba').click();
    //cy.contains('dd').type('07', { delay: 0 })
    //cy.contains('mm').type('12', { delay: 0 })
    //cy.contains('aaaa').type('1995', { delay: 0 })
    //cy.get('input[name="email"]').type('usuario@ejemplo.com')
    //cy.get('input[name="confirmarEmail"]').type('usuario@ejemplo.com')
    //cy.get('input[name="password"]').type('ContraseñaSegura123')
    //cy.get('[data-cy="input-repetir-password"]').type('ContraseñaSegura123')
    //cy.get('button[type="submit"]').click()
  })



})









  