import Puppy from '../Puppy'


test('Puppy bakrs', () => {
	const puppy = new Puppy()

	expect(puppy.bark()).toBeAudible()
})
