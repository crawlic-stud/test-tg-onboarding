import { defineConfig } from '@tok/generation';

export default defineConfig({
  // If you want to add language/currency localization – see ./examples/meditation as reference

  pages: [
    {
      slides: [
        // form
        {
          extends: 'form', // note, it's important to extend from 'form' here
          shape: 'square',
          pagination: 'count',
          title: 'Форма',
          description: 'Заполните форму',
          form: [
            {
              id: 'text_from_form',
              placeholder: 'Text input',
              type: 'text',
            },
            {
              id: 'number_from_form',
              placeholder: 'Number input',
              type: 'number',
            },
            {
              id: 'checkbox_from_form',
              placeholder: 'Checkbox',
              type: 'checkbox',
            },
          ],
          button: {content: "Done", to: "https://google.com", href: "https://google.com"},
        },
      ]
    }
  ]
});
