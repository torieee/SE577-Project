package Server;

import java.util.ArrayList;
import java.util.List;
import java.util.function.Predicate;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.web.bind.annotation.*;

@SpringBootApplication
public class Main {
	public static void main(String[] args) {
		SpringApplication.run(Main.class, args);
	}
}

@CrossOrigin
@RestController
@RequestMapping("/repos")
class RepoController {
	@GetMapping
	public List<Repo> getAllRepos() {
		return MockData.getData();
	}

	@GetMapping("/{repo}")
	public Repo getRepo(@PathVariable String repo) {
		Repo repository = MockData.find(element -> element.getRepo().equalsIgnoreCase(repo));
		if (repository == null) {
			throw new RepoNotFoundException(repo);
		}
		return repository;
	}
}

class Repo {
	private String repo;
	private String desc;
	private String url;
	private String lastUpdated;

	public Repo(String repo, String desc, String url, String lastUpdated) {
		this.repo = repo;
		this.desc = desc;
		this.url = url;
		this.lastUpdated = lastUpdated;
	}

	public String getRepo() {
		return repo;
	}

	public void setRepo(String repo) {
		this.repo = repo;
	}

	public String getDesc() {
		return desc;
	}

	public void setDesc(String desc) {
		this.desc = desc;
	}

	public String getUrl() {
		return url;
	}

	public void setUrl(String url) {
		this.url = url;
	}

	public String getLastUpdated() {
		return lastUpdated;
	}

	public void setLastUpdated(String lastUpdated) {
		this.lastUpdated = lastUpdated;
	}
}

class MockData {
	private static List<Repo> repositories = new ArrayList<>();

	static {

		repositories.add(new Repo("ChessValidation", "Chess move validation program with unit tests",
				"https://github.com/torieee/ChessValidation", "02/20/2023"));
		repositories.add(new Repo("Investment-Calculator", "Compound interest calculator GUI",
				"https://github.com/torieee/Investment-Calculator", "04/26/2022"));
		repositories
				.add(new Repo("StockPriceAPI", "API for customizing a GUI that shows the current stock price of VOO",
						"https://github.com/torieee/StockPriceAPI", "05/22/2022"));
		repositories.add(new Repo("QuoteSearch", "Java GUI to search stock prices connected to CNBC data",
				"https://github.com/torieee/QuoteSearch", "06/06/2022"));
		repositories.add(new Repo("Investment-Interface",
				"GUI tool for tracking market indices, searching current stock prices, and pinning stocks to a favorites board",
				"https://github.com/torieee/Investment-Interface", "08/04/2022"));
		repositories.add(new Repo("StockTicker", "GUI application that displays the current state of US market indices",
				"https://github.com/torieee/StockTicker", "06/04/2022"));
	}

	public static List<Repo> getData() {
		return repositories;
	}

	public static Repo find(Predicate<Repo> predicate) {
		return repositories.stream().filter(predicate).findFirst().orElse(null);
	}
}

class RepoNotFoundException extends RuntimeException {
	public RepoNotFoundException(String repo) {
		super("The repository called '" + repo + "' was not found");
	}
}
