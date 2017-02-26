declare namespace ElectronCompile {
   function enableLiveReload(): void;
}

declare module 'electron-compile' {
	export = ElectronCompile;
}