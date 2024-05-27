interface Player {
  id: number;
  name: string;
  score: number;
  isActive: boolean;
  lastLogin: Date;

  // Methods that could be implemented by a class using this interface
  login(): void;
  logout(): void;
  updateScore(newScore: number): void;
}

class GamePlayer implements Player {
  id: number;
  name: string;
  score: number;
  isActive: boolean;
  lastLogin: Date;

  constructor(id: number, name: string) {
    this.id = id;
    this.name = name;
    this.score = 0;
    this.isActive = false;
    this.lastLogin = new Date();
  }

  login(): void {
    this.isActive = true;
    this.lastLogin = new Date();
  }

  logout(): void {
    this.isActive = false;
  }

  updateScore(newScore: number): void {
    this.score = newScore;
  }
}
