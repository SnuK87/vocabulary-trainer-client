import { VocabularyTrainerClientPage } from './app.po';

describe('vocabulary-trainer-client App', () => {
  let page: VocabularyTrainerClientPage;

  beforeEach(() => {
    page = new VocabularyTrainerClientPage();
  });

  it('should display welcome message', done => {
    page.navigateTo();
    page.getParagraphText()
      .then(msg => expect(msg).toEqual('Welcome to app!!'))
      .then(done, done.fail);
  });
});
