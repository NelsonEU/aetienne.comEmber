import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      id: '0',
      school: 'Institut Paul Lambin',
      class: 'Bachelor of Computer Science and Management',
      grade: 'Cum Laude',
      years: 'September 2015 - June 2019'
    }, {
      id: '1',
      school: 'Cégep de Chicoutimi',
      class: 'Mobility exchange in Computer Science',
      grade: 'GPA: 3.3',
      years: 'August 2018 - December 2018'
    }, {
      id: '2',
      school: 'University of Nicosia',
      class: 'Introduction to digital currencies (MOOC)',
      grade: 'GPA: 3.4',
      years: 'September 2017 - December 2017'
    }];
  }
});
