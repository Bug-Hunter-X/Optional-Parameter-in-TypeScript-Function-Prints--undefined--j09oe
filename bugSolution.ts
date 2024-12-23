function printName(name?: string): void {
  if (name !== undefined) {
    console.log(name);
  }
}

printName(); // This will now print nothing.