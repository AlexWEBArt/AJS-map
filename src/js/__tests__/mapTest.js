import ErrorRepository from '../map';

test('checking the repository', () => {
  const repositoryError = new ErrorRepository();
  repositoryError.set('404', 'not found');

  expect(repositoryError.translate(404)).toBe('not found');
  expect(repositoryError.translate(402)).toBe('Unknown error');
});
