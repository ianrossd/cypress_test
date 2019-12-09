describe('Signup tests', function() {
    
    beforeEach(function() {
        cy.visitSignup()
    })
    
    it('Student signup', function() {
        cy.get('.et_pb_column_2 > .et_pb_button_module_wrapper > .et_pb_button', { timeout: 30000 })
        .invoke('removeAttr', 'target').click()
        cy.get('#signup_form_job_title', { timeout: 30000 }).should('not.exist')        // check if Job Title field is missing to verify Student form (negative testing)
        cy.get('#signup_form_first_name', { timeout: 30000 }).type('cyfname')
        cy.get('#signup_form_last_name').type('cylname')
        cy.get('#signup_form_email').type( Cypress.env('stEmail') )
        cy.get('#signup_form_email_confirm').type( Cypress.env('stEmail') )
        cy.get('#signup_form_password').type( Cypress.env('stPword') )
        cy.get('#signup_form_password2').type( Cypress.env('stPword') )
        cy.get('#termsAgree').check()
        cy.get('#freeTrialSubmitBtn').click()
        cy.get('.course-selection-form-footer-link-wrap > .goreact-btn').click()
        cy.get('.ficon-times').click()
        cy.contains('Course Registration').should('exist')                    // check if able to register for a course (positive testing)
    })

    it('Instructor signup', function() {
        cy.get('.et_pb_column_1 > .et_pb_button_module_wrapper > .et_pb_button', { timeout: 30000 })
        .invoke('removeAttr', 'target').click()
        cy.get('#signup_form_job_title', { timeout: 30000 }).should('exist')        // check if Job Title field exists to verify Instructor/Teacher form (positive testing)
        cy.get('#signup_form_first_name', { timeout: 30000 }).type('cyInstructorFname')
        cy.get('#signup_form_last_name').type('cyInstructorLname')
        cy.get('#signup_form_job_title').type('Professor')
        cy.get('#signup_form_phone_number').type('801-3216547')
        cy.get('#signup_form_email').type( Cypress.env('insEmail') )
        cy.get('#signup_form_email_confirm').type( Cypress.env('insEmail') )
        cy.get('#signup_form_password').type( Cypress.env('insPword') )
        cy.get('#signup_form_password2').type( Cypress.env('insPword') )
        cy.get('#termsAgree').check()
        cy.get('#freeTrialSubmitBtn').click()

        cy.get('button[id^="rich-dropdown"]').each(($btn, $idx, $list) => {
            cy.wrap($btn).click()
            if ($idx == 0) {
                cy.get('span.ng-binding').contains('Personal Use').click()
            } else if ($idx == 1) {
                cy.get('span.ng-binding').contains('Research').click()
            } else {
                cy.get('span.ng-binding').contains('Online').click()
            }
        })
        cy.get('button[type="submit"]').click()

        cy.wait(2000)                                                               // needed on my end as it wasn't redirecting to the dashboard but asking to
        cy.visit('https://app.goreact.com/dashboard/')                              // to login again. probably IP blocked after initial testing

        cy.get('#skip-tour-link', { timeout: 30000 }).click()
        cy.contains('Demo Assignment').should('exist')                      // check if Demo Assignment entry exists (positive testing)
        cy.contains('Course Registration').should('not.exist')               // check if Course Registration is missing for Instructor/Teacher (negative testing)
    })
})
