interface Bird {
	fly(): void;
	layEggs(): void;
}

interface Fish {
	swim(): void;
	layEggs(): void;
}

declare function getSmallPet(): Fish | Bird;

const pet = getSmallPet();
pet.layEggs();

// 두 개의 잠재적인 타입 중 하나에서만 사용할 수 있습니다. @errors: 2339
// pet.swim();
