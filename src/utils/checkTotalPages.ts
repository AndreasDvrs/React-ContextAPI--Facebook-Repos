export const checkTotalPages = (reposOfIntLength: number, perPage: number): number[] => {
	let allPages = Math.floor(reposOfIntLength/(perPage));			
	if (reposOfIntLength%perPage > 0) {
		allPages +=1				
	}
	let temptotalParr: number[] = []
	for (let i=1; i<=allPages; i++) {
		temptotalParr.push(i)
	}			
	return temptotalParr;
}
